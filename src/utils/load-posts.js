import mindfulness from '../assets/mindfulness.png'
import exercicios from '../assets/exercicios.png'
import dieta from  "../assets/dieta.png"
import social from  "../assets/social.png"
import controle from  "../assets/controle.png"
import pessoal from  "../assets/pessoal.png"

export const loadPosts = async() => {
    // const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const postsJson = await postsResponse.json();
    // const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");
    // const photosJson = await photosResponse.json();

    const postsAndPhotos = [
      {
        title: "Mindfulness e Meditação",
        body: "", //Colocar o link
        cover: mindfulness,
        id: 1
      },
      {
        title: "Exercícios Físicos",
        body: "",
        cover: exercicios,
        id: 2,
      },
      {
        title: "Dieta Saudável",
        body: "",
        cover: dieta,
        id: 3
      },
      {
        title: "Conexão Social",
        body: "",
        cover: social,
        id: 4
      },
      {
        title: "Autocontrole e Autocuidado",
        body: "",
        cover: controle,
        id: 5
      },
      {
        title: "Desenvolvimento Pessoal",
        body: "",
        cover: pessoal,
        id: 6
      },

    ]

    // const postsAndPhotos = postsJson.map((post, index) => {
    //   return {...post, cover: photosJson[index].url}
    // });

    return postsAndPhotos;        
}