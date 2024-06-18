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
        url: "https://plenae.com/para-inspirar/mindfulness-e-meditacao-suas-diferencas-e-semelhancas/",
        cover: mindfulness,
        id: 1
      },
      {
        title: "Exercícios Físicos",
        body: "",
        url: "https://drauziovarella.uol.com.br/atividade-fisica/como-os-exercicios-fisicos-ajudam-na-saude-mental/",
        cover: exercicios,
        id: 2,
      },
      {
        title: "Dieta Saudável",
        body: "",
        url: "https://www.telavita.com.br/blog/alimentacao-saudavel-na-saude-mental/#:~:text=A%20alimenta%C3%A7%C3%A3o%20saud%C3%A1vel%20para%20a,mentais%2C%20como%20ansiedade%20e%20depress%C3%A3o.",
        cover: dieta,
        id: 3
      },
      {
        title: "Conexão Social",
        body: "",
        url: "https://dasa.com.br/blog/saude/socializacao-para-a-saude/#:~:text=Socializar%20%C3%A9%20bom%20para%20a,e%20melhorar%20a%20sa%C3%BAde%20mental.",
        cover: social,
        id: 4
      },
      {
        title: "Autocontrole e Autocuidado",
        body: "",
        url: "https://www.vittude.com/blog/saude-mental-e-a-importancia-da-cultura-do-autocuidado/#:~:text=Import%C3%A2ncia%20da%20cultura%20do%20autocuidado%20na%20sa%C3%BAde%20mental,%C3%A9%20essencial%20para%20viverem%20bem.",
        cover: controle,
        id: 5
      },
      {
        title: "Desenvolvimento Pessoal",
        body: "",
        url: "https://selfestima.com.br/servicos-psicologia/desenvolvimento-humano/#:~:text=Para%20al%C3%A9m%20disso%2C%20o%20Desenvolvimento,nos%20conhecemos%2C%20mais%20nos%20desenvolvemos.",
        cover: pessoal,
        id: 6
      },

    ]

    // const postsAndPhotos = postsJson.map((post, index) => {
    //   return {...post, cover: photosJson[index].url}
    // });

    return postsAndPhotos;        
}