# Mood Tracker

## Descripción general
La página tiene como objetivo mantener un registro de los estados de ánimo del usuario a través del día, semana, mes o año.  
La idea principal del proyecto es crear un mood tracker flexible, que no limite al usuario a predefinir emociones específicas, sino que permita registrar cada entrada de manera libre, para luego analizar y sacar conclusiones personales.

A futuro se planea agregar gráficos que muestren la intensidad y valencia a lo largo del tiempo, así como filtros y búsqueda de registros.

## Primera Entrega
La entrega incluye una pantalla principal donde se concentran todas las funcionalidades mínimas del parcial:

- **Formulario de registro de mood**
    - Descripción del estado de ánimo (texto libre)
    - Intensidad (rango 1 a 10)
    - Valencia (rango -5 a 5)
    - El campo de descripción no puede estar vacío.
    - Intensidad debe estar entre 1 y 10
    - Valencia debe estar entre -5 y 5.

- **Historial de estados**
  - Lista que muestra todos los moods agregados.
  - Cada registro muestra: fecha, descripción, intensidad y valencia.
  - Los colores de los registros cambian según la valencia: verde (positivo), gris (0), rojo (negativo).
  - Cada item incluye un **botón de borrar** que solicita confirmación antes de eliminar la entrada.

## Flujo de uso
1. El usuario abre la página y ve el formulario de registro y la lista de moods previos.
2. Ingresa su estado de ánimo, intensidad y valencia, y hace clic en **Guardar**.
3. El nuevo mood se agrega al historial, se almacena en `localStorage` y se muestra dinámicamente.
4. Si el usuario desea eliminar un registro, hace clic en **Borrar**, y aparece una ventana de confirmación.
5. Persistencia con `localStorage`

## Consideraciones futuras
- Gráficos de intensidad y valencia a lo largo del tiempo.
- Filtros por fecha, intensidad o valencia.
- Posibilidad de editar registros existentes.
- Mejoras esteticas y css personalizado.

