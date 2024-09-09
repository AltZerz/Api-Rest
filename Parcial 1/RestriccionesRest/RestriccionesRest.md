# Restricciones Rest

1. Cliente-Servidor:
> Esta restricción establece una separación clara entre el cliente y el servidor. El cliente es responsable de la interfaz de usuario y la experiencia del usuario, mientras que el servidor maneja el almacenamiento de datos y la lógica. Esta separación permite que ambos componentes evolucionen de manera independiente sin afectar al otro.
>

2. Sin Estado:
> En una arquitectura sin estado, cada solicitud del cliente al servidor debe contener toda la información necesaria para entender y procesar la solicitud. Esto significa que el servidor no debe almacenar información sobre el estado del cliente entre solicitudes. Cada solicitud es independiente y autosuficiente, lo que simplifica la gestión de las sesiones y la escalabilidad del sistema.
>

3. Cacheable
> Las respuestas del servidor deben indicar explícitamente si son cacheables o no. Si una respuesta es cacheable, el cliente puede almacenarla en caché y reutilizarla para solicitudes futuras. Esto se logra mediante el uso de encabezados HTTP que especifican la política de caché, como Cache-Control y Expires.
>

4. Interfaz Uniforme:
> La interacción entre el cliente y el servidor debe seguir un conjunto estándar de reglas. Esto incluye el uso de métodos HTTP (GET, POST, PUT, DELETE) para realizar operaciones sobre los recursos, el uso de URIs uniformes para identificar recursos, y la representación de los recursos en formatos de datos estándar como JSON o XML. Esta uniformidad facilita la interoperabilidad entre diferentes sistemas y simplifica el desarrollo y mantenimiento de la API.
>

5. Sistema en Capas:
> La arquitectura debe permitir la composición de capas, donde cada capa tiene una funcionalidad específica y puede ser reemplazada o modificada independientemente. Por ejemplo, una capa puede manejar la autenticación y autorización, otra puede gestionar la lógica de negocio, y otra puede encargarse del acceso a datos. Esta estructura en capas permite una mayor modularidad y flexibilidad en el diseño del sistema.
>

6. Código Bajo Demanda (opcional):
> Los servidores pueden extender la funcionalidad del cliente enviando código ejecutable, como scripts JavaScript, que el cliente puede ejecutar. Esta capacidad permite actualizar y extender la funcionalidad del cliente sin necesidad de desplegar nuevas versiones del cliente. Aunque esta restricción es opcional, puede ser útil en ciertos escenarios donde se requiere una mayor flexibilidad y dinamismo en la interacción cliente-servidor.
>