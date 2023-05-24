

//En esta linea lo que hacemos es crear una constante llamada modelo en la cual
//utilizamos el metodo sequential() traido desde tf que se utiliza para crear modelos de aprendizaje automatico
//y lo que hace este metodo es devolvernos un objeto en el cual se pueden almacenar diferentes capas.
const modelo = tf.sequential();

//Utilizando el .add lo que hacemos es añadir una capa, en este caso añadimos la capa tf.layers.dense
//Esta capa se utiliza para neuronas artificiales.
//A esta capa se le pasa una configuracion, "units" seria la cantidada de neuronas que tendra nuestro modelo
//el inputShape es la forma de entrada de los datos, es decir como se lo va a considerar.
modelo.add(tf.layers.dense({ units: 1, inputShape: [1] }));


//En esta lina utilizamos el .compile para compilar el modelo y le pasamos unas opcions
//entre ellas el loss, en la cual pondremos de que manera queremos que calcule el error, en este caso es una funcion matematica cuadratica.
//el optimizer es la forma en la que el modelo se ajusta para minimzar la perdida, en este caso "sgd" ajusta los parámetros del modelo en función
//del gradiente de la función de pérdida, tomando pequeños pasos en la dirección que reduce la pérdida.
modelo.compile({
    loss: 'meanSquaredError',
    optimizer: 'sgd'
});

//En estas dos lineas se crean dos tensores y se guardan en dos constantes, la primera son los valores de X y la segunda de Y
//Se utiliza tf.tensor2d para crear un tendor de dos dimesiones, se le pasa como parametro dos arreglos, el primero con los valores
//y el segundo como quiero que el tensor interprete esa matriz, en este caso vemos que tine una matriz de 6 elementos, en el segundo parametro
//vemos una matriz con un 6 que hace referencia a que se le esta pasando 6 elementos y luego vemos un 1 que hace referencia a que se lo tome de a uno,
//individual a cada uno.
//Si hacemos un tensor.print() de uno de los dos se verian asi [[1], [2], [3], [5], [7], [9]], esto es asi porque el 1 los separa.
const valores_x = tf.tensor2d([1, 2, 3, 5, 7, 9], [6, 1]);
const valores_y = tf.tensor2d([2, 3, 4, 6, 8, 10], [6, 1]);

//Por ultimo, entrenamos al modelo con el metodo .fit, le pasados los valores de X y Y y como segundo parametro le pasamos las epocas, es decir
//la cantidad de veces que queremos que se entrene, en este caso 110
await modelo.fit(xs, ys, { epochs: 110 });



tf.tidy(() => {
    //Se crean tensores temporales dentro de este bloque
    const a = tf.tensor([1, 2, 3]);
    const b = tf.tensor([4, 5, 6]);
    
    //Suma de tensores
    const result = tf.add(a, b);
    
    //Se muestra el resultado
    result.print();
    
    //Los tensores temporales se liberan automáticamente al salir de la funcion
  });
  


const tensor = tf.tensor([1, 2, 3]);

// Hacer algo con el tensor
tensor.print();

//Liberar la memoria ocupada por el tensor
tf.dispose(tensor);

