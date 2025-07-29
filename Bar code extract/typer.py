import time
import pyautogui
import os
import requests
import json
import keyboard
from typing import List, Dict

pyautogui.FAILSAFE = False
pyautogui.PAUSE = 0.1

OK_BUTTON_IMAGE = 'ok_button.png'

def fetch_barcodes_from_api(api_url: str) -> List[Dict]:
    """Fetch barcode data from the API."""
    try:
        response = requests.get(api_url)
        response.raise_for_status() 
        return response.json()
    except requests.RequestException as e:
        print(f"Erro ao buscar dados da API: {e}")
        exit(1)

def select_filename(filenames: List[str]) -> str:
    """Allow user to select a filename using arrow keys."""
    selected_index = 0
    print("\nSelecione o arquivo usando as setas para cima/baixo e Enter para confirmar:")
    
    while True:
        os.system('cls' if os.name == 'nt' else 'clear')
        
        for i, filename in enumerate(filenames):
            prefix = "> " if i == selected_index else "  "
            print(f"{prefix}{filename}")
        
        key = keyboard.read_event(suppress=True).name
        
        if key == 'up' and selected_index > 0:
            selected_index -= 1
        elif key == 'down' and selected_index < len(filenames) - 1:
            selected_index += 1
        elif key == 'enter':
            print(f"\nArquivo selecionado: {filenames[selected_index]}")
            return filenames[selected_index]
        
        time.sleep(0.1) 

def clicou_no_botao_ok(timeout: float = 2, confidence: float = 0.9) -> bool:
    """Check if the OK button is found and click it."""
    fim = time.time() + timeout
    while time.time() < fim:
        pos = pyautogui.locateOnScreen(OK_BUTTON_IMAGE, confidence=confidence)
        if pos:
            pyautogui.click(pyautogui.center(pos))
            return True
        time.sleep(0.2)
    return False

def digitar_codigos(codigos: List[str]) -> None:
    """Type the barcodes and press Enter, then click OK button."""
    print("Posicione o cursor no campo de edição. Começando em 5s…")
    time.sleep(5)

    for codigo in codigos:
        try:
            pyautogui.write(codigo)
            pyautogui.press("enter")
            time.sleep(1)
            clicou_no_botao_ok()
        except Exception as e:
            print(f"Erro ao processar {codigo}: {e}")
        time.sleep(0.1)

if __name__ == "__main__":
    if not os.path.exists(OK_BUTTON_IMAGE):
        print(f"ERRO: não achei '{OK_BUTTON_IMAGE}'. "
              "Coloque aí a imagem do botão de diálogo.")
        exit(1)

    api_url = "http://localhost:8080" 
    data = fetch_barcodes_from_api(api_url)

    filenames = [item["filename"] for item in data]
    if not filenames:
        print("ERRO: Nenhum arquivo encontrado na resposta da API.")
        exit(1)

    selected_filename = select_filename(filenames)

    selected_barcodes = []
    for item in data:
        if item["filename"] == selected_filename:
            selected_barcodes = item["barcodes"]
            break

    if not selected_barcodes:
        print(f"ERRO: Nenhum barcode encontrado para o arquivo {selected_filename}.")
        exit(1)

    digitar_codigos(selected_barcodes)