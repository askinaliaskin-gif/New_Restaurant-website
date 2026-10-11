# Aperçu local avec support des requêtes Range (nécessaire pour faire défiler la vidéo) : python3 serve.py
import os, mimetypes
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
class H(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Accept-Ranges", "bytes"); super().end_headers()
    def send_head(self):
        r, p = self.headers.get("Range"), self.translate_path(self.path)
        if not r or not os.path.isfile(p): return super().send_head()
        a, b = r.split("=")[1].split("-"); n = os.path.getsize(p); a = int(a or 0); b = int(b) if b else n - 1
        self.send_response(206); self.send_header("Content-Type", mimetypes.guess_type(p)[0] or "application/octet-stream")
        self.send_header("Content-Range", f"bytes {a}-{b}/{n}"); self.send_header("Content-Length", str(b - a + 1)); self.end_headers()
        f = open(p, "rb"); f.seek(a); self.rng = b - a + 1; return f
    def copyfile(self, s, o):
        o.write(s.read(self.rng)) if getattr(self, "rng", None) else super().copyfile(s, o); self.rng = None
if __name__ == "__main__":
    print("http://localhost:8000"); ThreadingHTTPServer(("", 8000), H).serve_forever()
