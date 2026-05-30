# Luna Belle Bags

Catalogo web servido con Flask y preparado para desplegarse en Railway.

## Ejecutar localmente

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
flask --app app run
```

Abrir `http://127.0.0.1:5000`.

## Desplegar en Railway

1. Subir esta carpeta a un repositorio Git.
2. Crear un proyecto en Railway y conectarlo al repositorio.
3. Railway instalara `requirements.txt` y ejecutara `gunicorn app:app`.
4. Confirmar que el healthcheck `/health` responda correctamente.

El archivo `railway.json` contiene el comando de inicio y el healthcheck. El
`Procfile` mantiene compatibilidad con plataformas que detectan ese formato.
