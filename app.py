""" Si vas a activar el backend, acordate de cambiar las rutas del static del index.html 
que estan como relativas y tienen que ser fijas para que las lea el send_from_directory, sino tira error (el css y el js) """

# from flask import Flask, request, jsonify, send_from_directory
# import smtplib
# from email.mime.text import MIMEText
# from email.mime.multipart import MIMEMultipart
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/')
# def root():
#     return send_from_directory('static', 'index.html')

# @app.route('/static/<path:path>')
# def index(path):
#     return send_from_directory('/ruta/completa/al/proyecto/static', path)

# @app.route('/enviar_correo', methods=['POST'])
# def enviar_correo():
#     data = request.json

#     nombre = data.get('nombre', '')
#     asunto = data.get('asunto', '')
#     correo = data.get('correo', '')
#     mensaje = data.get('mensaje', '')

#     # Configura tus credenciales de correo electrónico y servidor SMTP
#     remitente_correo = 'joaquindiago98@gmail.com'
#     remitente_password = 'qmat ghfn ezkj rzaf'
#     destinatario_correo = 'joaquindiago98@gmail.com'
#     smtp_server = 'smtp.gmail.com'
#     smtp_port = 587

#     # Configura el mensaje
#     msg = MIMEMultipart()
#     msg['From'] = remitente_correo
#     msg['To'] = destinatario_correo
#     msg['Subject'] = f'Mensaje de {nombre} - {asunto}'
#     cuerpo_mensaje = f'Nombre: {nombre}\nCorreo: {correo}\n\n{mensaje}'
#     msg.attach(MIMEText(cuerpo_mensaje, 'plain'))

#     # Inicia la conexión SMTP
#     with smtplib.SMTP(smtp_server, smtp_port) as server:
#         server.starttls()
#         server.login(remitente_correo, remitente_password)
#         server.sendmail(remitente_correo, destinatario_correo, msg.as_string())

#     return jsonify({'mensaje': 'Correo enviado exitosamente'})

# if __name__ == '__main__':
#     app.run(debug=True)