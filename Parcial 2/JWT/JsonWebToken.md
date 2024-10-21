# Json Web Token

**Definicion de Json Web Token**
Un JSON Web Token (JWT) es un estándar abierto  que se utiliza para transmitir información de manera segura entre dos partes como un objeto JSON. 
Los JWT son comúnmente usados para autenticación y autorización en aplicaciones web, permitiendo que el servidor valide la identidad del usuario y sus permisos.

<br>

**Partes que componen el JWT:**

+ Header (Encabezado):
> El encabezado generalmente consiste en dos partes: el tipo de token, que es JWT, y el algoritmo de firma que se utiliza, como HMAC SHA256 o RSA.
>

<br>

+ Payload (Carga útil):
> La carga útil contiene las afirmaciones (claims) que se desean transmitir. Las afirmaciones son declaraciones sobre una entidad (generalmente el usuario) y datos adicionales. Hay tres tipos de afirmaciones: 
> | Registered claims: Afirmaciones predefinidas que no son obligatorias, pero se recomiendan, como iss (emisor), exp (fecha de expiración), sub (sujeto), y aud (audiencia).
> 
> | Public claims: Afirmaciones definidas por los usuarios que deben ser únicas.
> 
> | Private claims: Afirmaciones personalizadas que se utilizan entre el emisor y el receptor.
>

<br>

+ Signature (Firma):
> Para crear la firma, se toma el encabezado y la carga útil, se codifican en Base64Url, y se combinan con una clave secreta (en caso de HMAC) o una clave privada (en caso de RSA). Esto asegura que el token no haya sido alterado.
>