
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM
    var botonGuardar = document.getElementById('botonGuardar');
    var mensajeEstadoAnimo = document.getElementById('mensajeEstadoAnimo');
    var selectEstadoAnimo = document.getElementById('estado_animo');

    // Agregar evento de clic al botón
    botonGuardar.addEventListener('click', function () {
        // Obtener el valor seleccionado del estado de ánimo
        var estadoSeleccionado = selectEstadoAnimo.value;

     
        // Mostrar el mensaje correspondiente
        switch (estadoSeleccionado) {
            case 'feliz':
                mensajeContainer.classList.remove('mostrar');
        setTimeout(() => {
                mensajeEstadoAnimo.innerHTML = '¡Enhorabuena por sentirte feliz!' +
                'La felicidad es un regalo precioso. Aprovecha este momento para disfrutar, compartir sonrisas y contagiar alegría a quienes te rodean.' +
                'Recuerda que la felicidad no solo se encuentra en los grandes logros, sino también en las pequeñas cosas cotidianas. ¡Disfruta cada momento!';
                
                mensajeContainer.classList.add('mostrar');
              }, 50);
                break;
            case 'triste':
                mensajeContainer.classList.remove('mostrar');
                setTimeout(() => {
                mensajeEstadoAnimo.textContent = 'En los momentos de tristeza, recuerda que las nubes grises también pasan.' +
                 'La tormenta puede ser intensa, pero tras ella siempre llega la calma.'+
                 'Eres más fuerte de lo que crees, y este momento difícil también pasará.'+ 
                 'Permítete sentir, pero no te olvides de la luz que está esperando al final del túnel.'+ 
                 'Tienes el poder de superar cualquier adversidad. Estoy aquí para apoyarte, y juntos vamos a enfrentar y superar estos tiempos difíciles';
                mensajeContainer.classList.add('mostrar');
              }, 50);
                break;
                case 'ansioso':
                mensajeContainer.classList.remove('mostrar');
                setTimeout(() => {
                mensajeEstadoAnimo.textContent = 'Entiendo que la ansiedad puede ser abrumadora, pero quiero recordarte que estás rodeado de apoyo. Respira profundo y toma un momento para centrarte en el presente.'+ 
                'Las cosas pueden parecer desafiantes ahora, pero cada paso que tomas es un paso más cerca de superar esto.'+
                ' Permítete sentir, pero también recuerda que eres capaz y fuerte. Estoy aquí para ti, dispuesto/a a ayudarte en lo que necesites. Juntos, encontraremos la calma en medio de la tormenta. '+
                 'Confía en que este momento pasará, y saldrás fortalecido/a al otro lado';
                mensajeContainer.classList.add('mostrar');
                  }, 50);
                break; 
                    
             case 'Solitario':
                mensajeContainer.classList.remove('mostrar');
                setTimeout(() => {
                mensajeEstadoAnimo.textContent = 'En esos momentos de soledad, quiero que recuerdes que no estás solo/a. '+
                'Aunque no pueda estar físicamente a tu lado, mi apoyo y amistad están contigo. '+
                'Aprovecha este tiempo contigo mismo/a para explorar tus intereses, hacer cosas que amas y cuidar de ti. '+
                'Las conexiones significativas están siempre a tu alcance, y nuevas amistades pueden surgir cuando menos lo esperas. '+
                'Estoy aquí para ti, y siempre puedes contar con alguien que valora y se preocupa por ti. La soledad es solo temporal, y mejores momentos están en camino.';
                mensajeContainer.classList.add('mostrar');
                }, 50);
                break;
            case 'Agradecido':
                mensajeContainer.classList.remove('mostrar');
                setTimeout(() => {
                mensajeEstadoAnimo.textContent = 'Tu gratitud ilumina no solo tu vida sino también la de quienes te rodean. Mantén ese hermoso corazón agradecido, porque atraes más razones para estar agradecido/a.'+ 
                'La positividad que irradias es contagiosa y crea un entorno enriquecedor.'+ 
                'Sigue apreciando las pequeñas alegrías y los momentos especiales. Tu actitud agradecida es un regalo, y estoy agradecido/a por tenerte en mi vida.'+
                 'Que esta gratitud continúe guiando tu camino y atrayendo aún más razones para sonreír.';
                mensajeContainer.classList.add('mostrar');
                }, 50);
                break;
            case 'Cansado':
                mensajeContainer.classList.remove('mostrar');
                setTimeout(() => {
                mensajeEstadoAnimo.textContent = 'Comprendo que te sientes cansado/a mentalmente, y está bien reconocerlo. Tu mente también necesita descanso y cuidado. Permítete tomar un respiro, desconectar por un momento y hacer algo que te traiga calma.'+ 
                'Recuerda que no estás solo/a, y está bien pedir apoyo cuando lo necesitas. '+
                'La fatiga mental es un recordatorio de que eres una persona dedicada y trabajadora.'+ 
                'Con pequeños descansos y autocuidado, te recuperarás. Estoy aquí para respaldarte en este proceso y ayudarte a recargar esas energías mentales. ¡Ánimo, porque eres más fuerte de lo que crees!';
                mensajeContainer.classList.add('mostrar');
                }, 50);
                break;
             case 'Enojado':
                mensajeContainer.classList.remove('mostrar');
                setTimeout(() => {
                mensajeEstadoAnimo.textContent = 'Comprendo que estás sintiendo enojo en este momento, y está bien sentirlo.'+
                 'El enojo es una emoción natural. Pero también quiero recordarte que eres más fuerte que cualquier circunstancia que te cause frustración. '+
                 'Tómate un momento para respirar profundamente y reflexionar. La solución puede estar en encontrar una perspectiva positiva o en buscar maneras constructivas de abordar la situación.'+
                  'Estoy aquí para apoyarte, para escucharte si lo necesitas y para recordarte que, juntos, podemos encontrar una manera de superar este momento';
                mensajeContainer.classList.add('mostrar');
                }, 50);
                break;
            case 'Perdido':
                mensajeContainer.classList.remove('mostrar');
                setTimeout(() => {
                mensajeEstadoAnimo.textContent = 'En los momentos de sentirte perdido/a, recuerda que es completamente normal experimentar confusión y dudas.'+
                 'Cada paso, incluso los pequeños, nos lleva a algún lugar. Permítete explorar y descubrir. '+
                 'A veces, las respuestas no están claras de inmediato, pero cada experiencia, incluso las desafiantes, te enseñará algo valioso. '+
                 'Estoy aquí para apoyarte en este viaje, para escucharte y para recordarte que cada día es una nueva oportunidad para encontrarte a ti mismo/a. '+
                 'Confía en tu capacidad para superar este período de confusión, porque dentro de ti hay una guía interna fuerte y sabia.';
                mensajeContainer.classList.add('mostrar');
                }, 50);
                break;
            case 'Optimista':
                mensajeContainer.classList.remove('mostrar');
                setTimeout(() => {
                mensajeEstadoAnimo.textContent = '¡Tu optimismo es contagioso y una luz brillante en cualquier situación!'+
                 'Sigue cultivando esa mentalidad positiva, porque está claro que tiene un impacto positivo en tu vida y en la de quienes te rodean. '+
                 'Con tu actitud optimista, estás abriendo puertas a oportunidades y creando un camino lleno de posibilidades. '+
                 'Mantente enfocado/a en tus metas y sueños, porque el optimismo es una fuerza poderosa que te impulsa hacia adelante. '+
                 'Estoy emocionado/a por todo lo que el futuro tiene reservado para ti, ¡sigue brillando con esa luz positiva!';
                mensajeContainer.classList.add('mostrar');
                }, 50);
                 break;       
            // Agrega más casos según sea necesario
            default:
        mensajeEstadoAnimo.textContent = '';
        mensajeContainer.classList.remove('mostrar');
        }
    });
});
