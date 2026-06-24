# Tic-Tac-Toe

Implementación del clásico juego Tic-Tac-Toe (Tres en Raya) desarrollada con HTML, CSS y JavaScript puro.

Dos jugadores se turnan para colocar sus fichas en un tablero de 3×3. El juego detecta automáticamente las condiciones de victoria, empate y resalta la combinación ganadora.

## Características

* 🎮 Modo para dos jugadores.
* ❌ y ⭕ como fichas de juego.
* ✅ Detección automática de victorias.
* 🤝 Detección de empate.
* 🏆 Resaltado visual de la línea ganadora.
* 🔄 Reinicio rápido de la partida.
* 🎨 Interfaz ligera desarrollada sin frameworks.

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## Captura de funcionamiento

El juego se desarrolla sobre un tablero de 3×3 donde los jugadores alternan turnos hasta que uno consigue alinear tres fichas horizontal, vertical o diagonalmente.

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/LuisE-dex/Tic-Tac-Toe.git
cd Tic-Tac-Toe
```

## Ejecución

No requiere instalación de dependencias.

Simplemente abre el archivo:

```text
index.html
```

en tu navegador favorito.

## Reglas del juego

1. El jugador ❌ realiza el primer movimiento.
2. Los jugadores alternan turnos.
3. Gana quien consiga tres fichas consecutivas:

   * Horizontalmente
   * Verticalmente
   * Diagonalmente
4. Si el tablero se llena sin un ganador, la partida termina en empate.

## Estructura del proyecto

```text
Tic-Tac-Toe/
├── assets/
│   └── font/
├── index.html
├── main.js
└── style.css
```

## Aprendizajes del proyecto

Este proyecto fue desarrollado como práctica de:

* Manipulación del DOM.
* Gestión de eventos en JavaScript.
* Lógica de validación de estados de juego.
* Diseño de interfaces web sin frameworks.
* Organización básica de proyectos frontend.
