# Encriptador de Texto (enDesarrollo)

Proyecto de encriptador de texto desarrollado como parte de un desafío de programación. La aplicación permite encriptar y desencriptar textos basados en un conjunto específico de reglas. 

## Descripción

La aplicación convierte el texto ingresado según las siguientes reglas de encriptación:
- La letra `e` se convierte en `enter`
- La letra `i` se convierte en `imes`
- La letra `a` se convierte en `ai`
- La letra `o` se convierte en `ober`
- La letra `u` se convierte en `ufat`

Además, puede devolver el texto encriptado a su forma original.

## Funcionalidades

- **Encriptar**: Convierte texto en su forma encriptada usando las reglas especificadas.
- **Desencriptar**: Convierte el texto encriptado de vuelta a su forma original.
- **Copiar al portapapeles**: Permite copiar el texto encriptado/desencriptado al portapapeles para su fácil transferencia.

## Requisitos

- Solo se aceptan letras minúsculas.
- No se permiten letras con acentos ni caracteres especiales.

## Estructura del Proyecto

1. **HTML**: 
   - **Campo de texto** para ingresar el texto a encriptar o desencriptar.
   - **Botones** para encriptar, desencriptar y copiar al portapapeles.
   - **Área de presentación** para mostrar el texto encriptado/desencriptado.

2. **JavaScript**:
   - Función para encriptar el texto según las reglas.
   - Función para desencriptar el texto encriptado.
   - Función para copiar el texto al portapapeles.
   - Mensajes de validación para evitar caracteres no permitidos.

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
