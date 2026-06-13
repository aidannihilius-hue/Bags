from flask import Flask, jsonify, render_template


app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0


@app.after_request
def add_security_headers(response):
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        "font-src 'self' https://fonts.gstatic.com; "
        "img-src 'self' data:; "
        "script-src 'self'; "
        "style-src 'self' https://fonts.googleapis.com; "
        "base-uri 'self'; "
        "form-action 'none'; "
        "frame-ancestors 'none'"
    )
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Permissions-Policy"] = "camera=(), geolocation=(), microphone=()"
    return response


@app.get("/")
def index():
    return render_template("index.html")


@app.get("/health")
def health():
    return jsonify(status="ok")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
