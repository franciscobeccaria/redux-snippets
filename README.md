# redux-snippets

Este es un pequeño ejemplo del uso de **Redux**. El objetivo es conectar 2 componentes mediante el estado global creado por Redux. Un componente recibirá datos del estado y el otro componente enviará datos al estado. 

Para el ejemplo tenemos 6 archivos. 

1. [store.js](https://github.com/franciscobeccaria/redux-snippets/blob/main/redux/store.js)
2. [actions.js](https://github.com/franciscobeccaria/redux-snippets/blob/main/redux/actions.js)
3. [actionCreators.js](https://github.com/franciscobeccaria/redux-snippets/blob/main/redux/actionCreators.js)
4. [App.js o App.jsx](https://github.com/franciscobeccaria/redux-snippets/blob/main/App.js)
5.  [ComponentOne.jsx](https://github.com/franciscobeccaria/redux-snippets/blob/main/ComponentOne.jsx)
6. [ComponentTwo.jsx](https://github.com/franciscobeccaria/redux-snippets/blob/main/ComponentTwo.jsx)

## App.js / App.jsx

* Acá utilizamos el *Provider* e introducimos toda nuestra aplicación dentro del mismo. 

## store.js

* Creamos el store inicial
* Actualizamos el store inicial mediante actions
	* Manipula el estado. En el ejemplo: tenemos un array vacío y se le va agregando elementos usando el método concat. 

## actions.js

* Declaramos las actions

## actionCreators.js

* Creamos las actions y le pasamos:
	* type
	* data

## 	ComponentOne.jsx & ComponentTwo.jsx

Utilizaremos estos componentes para conectarlos entre sí mediante el estado global creado por **Redux**. 

Hay dos conceptos para tener en claro:
* mapStateToProps
* mapDispatchToProps

### mapStateToProps

En resumen, se podría decir que el componente que tiene *mapStateToProps* recibe las props del estado global. 

### mapDispatchToProps

Y en este caso, se podría decir que el componente que tiene *mapDispatchToProps* envía las props al estado global, mediante la ejecución de una action.

## Conceptos de Flux & Estado global

**![](https://lh5.googleusercontent.com/RUv4N3YNEX5qmOv-LPeVkrre07UTV6ErkfZfvqhgkkQM7aA6K8_4xVTHtehoBAflTIMT0Rc9IVwqJ8s1mQj3bWtr8pmXoyvpYozStM0SRANYmi4C-pSOSVcQ-VpEnZUihV4oi6Q)**

Esta es la explicación simple de **Flux y el Estado global**. 

1. Hay un *Action* inicial
2. *Dispatcher* despacha a *Store*
3. *Store* altera la *View*
----
1. Hay un *Action* impulsado por la *View*
2. *Dispatcher* despacha a *Store*
3. *Store* altera la *View*
