<h1 align="center">Project Trybetunes</h1>

<br />

 ![requisito-15](src/images/)
 ![requisito-15](src/images/ImageProjeto2.png)
 ![requisito-15](src/images/ImageProjeto2.png)
 ![requisito-15](src/images/ImageProjeto2.png)
 ![requisito-15](src/images/ImageProjeto2.png)

<br />

## Descrição do Projeto
<p align="center">

Desenvolvimento de uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas. Essa aplicação será capaz de:

  - Fazer login;
  - Pesquisar por uma banda ou artista;
  - Listar os álbuns disponíveis dessa banda ou artista;
  - Visualizar as músicas de um álbum selecionado;
  - Reproduzir uma prévia das músicas deste álbum;
  - Favoritar e desfavoritar músicas;
  - Ver a lista de músicas favoritas;
  - Ver o perfil da pessoa logada;
  - Editar o perfil da pessoa logada;

<br />

Habilidades desenvolvidas
  - Ciclo de vida de componentes
  - React Router
</p>

<hr>

<div align="center">
<img src="https://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/REACT-239120?style=for-the-badge&logo=react&logoColor=white"/>
  
</div>

<br />

## Requisitos Obrigatórios

## 1. Crie as rotas necessárias para a aplicação

Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico. Crie cada componente dentro da pasta `src/pages`, conforme o indicado abaixo:

<details><summary> Rota <code>/</code></summary>

- A rota `/` deve renderizar um componente chamado `Login`. Este componente deve ter uma `div` com o atributo `data-testid="page-login"` que envolva todo seu conteúdo;
</details>

<details><summary> Rota <code>/search</code></summary>

- A rota `/search` deve renderizar um componente chamado `Search`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-search"`;
</details>

<details><summary> Rota <code>/album/:id</code></summary>

- A rota `/album/:id` deve renderizar um componente chamado `Album`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-album"`;
</details>

<details><summary> Rota <code>/favorites</code></summary>

- A rota `/favorites` deve renderizar um componente chamado `Favorites`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-favorites"`;
</details>
<details><summary> Rota <code>/profile</code></summary>

- A rota `/profile` deve renderizar um componente chamado `Profile`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile"`;
</details>

<details><summary> Rota <code>/profile/edit</code></summary>

- A rota `/profile/edit` deve renderizar um componente chamado `ProfileEdit`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile-edit"`;
</details>

<details><summary> Para qualquer outra rota não mapeada</summary>

Para qualquer outra rota não mapeada, deve ser renderizado um componente chamado `NotFound`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-not-found"`;
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />
  
  - A rota `/` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-login`;

  - A rota `/search` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-search`;

  - A rota `/album/:id` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-album`;

  - A rota `/favorites` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-favorites`;

  - A rota `/profile` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-profile`;

  - A rota `/profile/edit` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-profile-edit`;

  - Existe uma página para rotas não mapeadas e que renderiza um componente com o `data-testid` com valor `page-not-found`;
</details>

---

## 2. Crie um formulário para identificação
<details><summary>Dentro do componente <code>Login</code>, que é renderizado na rota <code>/</code>, crie um formulário para que a pessoa usuária se identifique com um nome:</summary>

- Você deve criar um campo para que a pessoa usuária insira seu nome. Este campo deverá ter o atributo `data-testid="login-name-input"`.

- Crie um botão com o texto `Entrar`. Este botão deverá ter o atributo `data-testid="login-submit-button"`.

- O botão para entrar só deve estar habilitado caso o nome digitado tenha 3 ou mais caracteres.

- Ao clicar no botão `Entrar`, utilize a função `createUser` da `userAPI` para salvar o nome digitado. A função `createUser` espera receber como argumento um objeto com as informações da pessoa: 
  
```javascript
createUser({ name: "Nome digitado" });
```

:bulb: *Obs:* Você verá nos requisitos mais a frente que você poderá passar outras informações para a `createUser`, mas não se preocupe com isso agora. Por enquanto você pode passar somente um objeto com a propriedade `name`.

- Enquanto a informação da pessoa usuária é salva, uma mensagem com o texto `Carregando...` deve aparecer na tela. **:bulb: Dica:** Você precisará dessa mensagem várias vezes no futuro, então é uma boa ideia criar um componente para ela :wink:

- Após a informação ter sido salva, faça um redirect para a rota `/search`.

![requisito-2](images/requisito2.gif)

</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Ao navegar para a rota `/`, o input e o botão especificados estão presentes;

- O botão só é habilitado se o input de nome tiver 3 ou mais caracteres;

- Ao clicar no botão habilitado, a função `createUser` da `userAPI` é chamada;

- Ao clicar no botão, a mensagem `Carregando...` é exibida e após a resposta da API acontece o redirecionamento para a rota `/search`.
</details>

---

## 3. Crie um componente de cabeçalho

<details><summary>Crie um componente chamado <code>Header</code>, dentro da pasta <code>src/components</code>:</summary>

- Crie esse componente com a tag `header` envolvendo todo seu conteúdo e com o atributo `data-testid="header-component"`;

- Renderize o componente de cabeçalho nas páginas das rotas `/search`, `/album/:id`, `/favorites`, `/profile` e `/profile/edit`;

- Utilize a função `getUser` da `userAPI` para recuperar o nome da pessoa logada e exiba essa informação na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="header-user-name"`.

- Enquanto estiver aguardando a resposta da `getUser`, exiba apenas a mensagem de `Carregando...`.
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- O componente `Header` é renderizado na página `/search`;

- O componente `Header` é renderizado na página `/album/:id`;

- O componente `Header` é renderizado na página `/favorites`;

- O componente `Header` é renderizado na página `/profile`;

- O componente `Header` é renderizado na página `/profile/edit`;

- A função `getUser` é chamada ao renderizar o componente;

- A mensagem de `Carregando...` é exibida ao renderizar o componente e é removida após o retorno da API;

- O nome da pessoa usuária está presente na tela após o retorno da API.
</details>

---

## 4. Crie os links de navegação no cabeçalho

<details><summary> Crie o link que redireciona para a página de pesquisa:</summary>

  * O link que redireciona para a página de pesquisa deve estar dentro do componente `Header` e precisa possuir o atributo `data-testid="link-to-search"`.
</details>

<details><summary> Crie o link que redireciona para a página de músicas favoritas:</summary> 
  
  * O link que redireciona para a página de músicas favoritas deve estar dentro do componente `Header` e possuir o atributo `data-testid="link-to-favorites"`.
</details>

<details><summary> Crie o link que redireciona para a página de exibição de perfil:</summary> 

  * O link que redireciona para a página de exibição de perfil deve estar dentro do componente `Header` e precisa possuir o atributo `data-testid="link-to-profile"`.
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Os links de navegação são exibidos na página de pesquisa;
  
  - A navegação entre a página de pesquisa e a página de músicas favoritas ocorre corretamente;
  
  - A navegação entre a página de pesquisa e a página de exibição do perfil ocorre corretamente;
  
  - Os links de navegação são exibidos na página do álbum;
  
  - A navegação entre a página do álbum e a página de pesquisa ocorre corretamente;
  
  - A navegação entre a página do álbum e a página de músicas favoritas ocorre corretamente;
  
  - A navegação entre a página do álbum e a página de exibição do perfil ocorre corretamente;
  
  - Os links de navegação são exibidos na página de músicas favoritas;
  
  - A navegação entre a página de músicas favoritas e a página de pesquisa ocorre corretamente;
  
  - A navegação entre a página de músicas favoritas e a página de exibição perfil ocorre corretamente;
  
  - Os links de navegação são exibidos na página de exibição do perfil;
  
  - A navegação entre a página de exibição do perfil e a página de pesquisa ocorre corretamente;
  
  - A navegação entre a página de exibição do perfil e a página de músicas favoritas ocorre corretamente;
  
  - Os links de navegação são exibidos na página de edição do perfil;
  
  - A navegação entre a página de edição do perfil e a página de pesquisa ocorre corretamente;
  
  - A navegação entre a página de edição do perfil e a página de músicas favoritas ocorre corretamente;
  
  - A navegação entre a página de edição do perfil e a página de exibição do perfil ocorre corretamente.
</details>

---

## 5. Crie o formulário para pesquisar artistas

Este formulário deve conter um input e um botão para que seja possível pesquisar os álbums de uma banda ou artista. 

<details><summary> Crie o formulário dentro do componente <code>Search</code>, que é renderizado na rota <code>/search</code>:</summary>
    
  * Crie um campo para pessoa digitar o nome da banda ou artista a ser pesquisada. Esse campo deve ter o atributo `data-testid="search-artist-input"`.
  
  * Crie um botão com o texto `Pesquisar`. Esse botão deve ter o atributo `data-testid="search-artist-button"`.

  * O botão só deve estar habilitado caso o nome do artista tenha 2 ou mais caracteres.

  ![requisito-5](images/requisito5.png)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Ao navegar para a rota `/search`, o input e o botão estão presentes na tela;

  - O botão está habilitado somente se o input de nome tiver 2 ou mais caracteres.
</details>

---

## 6. Faça a requisição para pesquisar artistas

Com a estrutura da tela de pesquisa criada, agora é hora de fazer uma requisição e receber a lista de álbums da banda ou artista pesquisada.

  * <details><summary> Ao clicar no botão de <code>Pesquisar</code>, limpe o valor do input e faça uma requisição utilizando a função do arquivo <code>searchAlbumsAPIs.js</code>:</summary>

    * :bulb: Lembre-se que essa função espera receber uma string com o nome da banda ou artista.

    * Enquanto aguarda a resposta da API, esconda o input e o botão de pesquisa e exiba a mensagem `Carregando...` na tela.

    * Após receber a resposta da requisição exibir na tela o texto `Resultado de álbuns de: <artista>`, onde `<artista>` é o nome que foi digitado no input.
  </details>

 * <details><summary> Liste os álbuns retornados. A API irá retorna um <i>array</i> de objetos. Cada objeto terá a seguinte estrutura:</summary> 

    ```
    [
      {
        artistId: 12,
        artistName: "Artist Name",
        collectionId: 123,
        collectionName: "Collection Name",
        collectionPrice: 12.25,
        artworkUrl100: "https://url-to-image",
        releaseDate: "2012-03-02T08:00:00Z",
        trackCount: 8,
      }
    ]
    ```

    ![requisito-6_1](images/requisito6_1.gif)
  </details>

  * <details><summary> Se nenhum álbum for encontrado para o nome pesquisado, a API irá retornar um array vazio. Nesse caso, a mensagem `Nenhum álbum foi encontrado` deverá ser exibida:</summary>
  
    ![requisito-6_2](images/requisito6_2.gif)
  </details>

  * <details><summary> Ao listar os álbuns, crie um link em cada card para redirecionar para a página do álbum. Este link deve ter o atributo <code>data-testid={`link-to-album-${collectionId}`}</code>. Onde `collectionId` é o valor da propriedade de cada Álbum:</summary>

    * Este link deve redirecionar para a rota `/album/:id`, onde `:id` é o valor da propriedade `collectionId` de cada Álbum da lista recebida pela API.
  </details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Ao clicar em `pesquisar`, a requisição é feita usando a `searchAlbumsAPI`;

  - Ao clicar no botão, o texto `Resultado de álbuns de: <artista>` aparece na tela;

  - Ao receber o retorno da API, os álbuns são listados na tela;

  - Caso a API não retorne nenhum álbum, a mensagem `Nenhum álbum foi encontrado` é exibida;

  - Existe um link para cada álbum listado que redirecione para a rota `/album/:id`.
</details>

---

## 7. Crie a lista de músicas do álbum selecionado

Agora que está tudo pronto, você poderá exibir a lista de músicas do álbum selecionado. 

<details><summary>Crie a lista dentro do componente <code>Album</code>, que é renderizado na rota <code>/album/:id</code>: </summary>

- Ao entrar na página, faça uma requisição utilizando a função `getMusics` do arquivo `musicsAPI.js`. Lembre-se que essa função espera receber uma string com o id do álbum.

- Exiba o nome da banda ou artista na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="artist-name"`.

- Exiba o nome do álbum e nome da banda ou artista na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="album-name"`.

- Liste todas as músicas do álbum na tela. Para isso, crie um componente chamado `MusicCard` que deverá exibir o nome da música (propriedade `trackName` no objeto recebido pela API) e um player para tocar o preview da música (propriedade `previewUrl` no objeto recebido pela API).

:bulb: **Dica:** Lembre-se que o retorno da função `getMusics`, quando encontra as informações, é um array onde o primeiro elemento é um objeto com informações do álbum e o restante dos elementos são as músicas do álbum.

Para tocar o preview, você deve usar a tag `audio` do próprio HTML. Sua implementação é assim:

```html
<audio data-testid="audio-component" src="{previewUrl}" controls>
  <track kind="captions" />
  O seu navegador não suporta o elemento{" "} <code>audio</code>.
</audio>
```

**Importante:** lembre-se de colocar o atributo `data-testid="audio-component"` na tag `audio` de cada música listada.

  ![requisito-7](images/requisito7.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />
  
  - Se o serviço de `musicsAPI` está sendo chamado;
  
  - Se o nome da banda ou artista e o nome do álbum são exibidos;
  
  - Se todas músicas retornadas pela API são listadas.
</details>

---

## 8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas

Você já consegue listar as músicas dos álbuns. Nessa etapa você poderá marcar quais são as músicas que você mais gosta.

  * <details><summary> No componente <code>MusicCard</code>, crie um input do tipo <code>checkbox</code> para marcar as músicas favoritas:</summary> 

    * Esse input deve conter uma `label` com o texto `Favorita` e deve possuir o atributo ```data-testid={`checkbox-music-${trackId}`}```, onde `trackId` é a propriedade `trackId` do objeto recebido pela API.
  </details>

  * <details><summary> Para adicionar uma música a lista de favoritas, utilize a função <code>addSong</code> da <code>favoriteSongsAPI</code>. Você deve passar para essa função um objeto no mesmo formato que você recebe da API <code>getMusics</code>:</summary>

    * Enquanto aguarda o retorno da função `addSong`, renderize a mensagem de `Carregando...`.
  </details>

<details><summary><b> Ilustração:</b></summary>

  ![requisito-8](images/requisito8.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Existe um checkbox para cada música da lista;

  - A função `addSong` é chamada quando algum checkbox é clicado;

  - A mensagem `Carregando...` é exibida após clicar no checkbox e removida depois do retorno da API.
</details>

---

## 9. Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum

<details><summary> Ao entrar na página com a lista de músicas de um álbum, na rota <code>/album/:id</code>, as músicas que já foram favoritadas anteriormente devem estar com o checkbox marcado</summary>

- Ao entrar na página, utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- A lista recebida pela função `getFavoriteSongs` deve ser salva no estado da sua aplicação.

- Após receber o retorno da função `getFavoriteSongs`, as músicas que já foram favoritadas devem estar com o checkbox marcado como `checked`.

  ![requisito-9](images/requisito9.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A requisição para `getFavoriteSongs` é feita para recuperar as músicas favoritas;

  - Ao entrar na página, o número de checkboxes marcados como `checked` é correspondente ao número de músicas que já foram favoritadas;
</details>

---

## 10. Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música

<details><summary> Após adicionar uma música na lista de favoritas usando a função <code>addSong</code> (Requisito 8), faça uma requisição usando a função <code>getFavoriteSongs</code> para atualizar a lista de músicas favoritas:</summary>

- Ao favoritar uma música, aguarde o retorno da função `addSong` (que já foi implementada no requisito 8) e utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Atualize o estado da aplicação com o valor recebido pelo retorno da função `getFavoriteSongs`.
  
- Após receber o retorno da função `getFavoriteSongs`, as músicas que já foram favoritadas devem estar com o checkbox marcado como `checked`.
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A requisição para `getFavoriteSongs` é feita após favoritar uma música;

  - O número de checkboxes marcados como `checked` aumenta quando um checkbox é clicado.
</details>

---

## 11. Crie o mecanismo para remover músicas na lista de músicas favoritas

Depois de listar e favoritar as músicas de um álbum, você também deve poder remover uma música da lista de favoritas.

<details><summary> Ao clicar em uma música que já está marcada como favorita, ela deve ser removida da lista de músicas favoritas. Para isso você deve usar a função <code>removeSong</code> da <code>favoriteSongsAPI</code>. Essa API espera receber um objeto no mesmo formato que foi passado anteriormente para a função <code>addSong</code>: </summary>

  * Enquanto aguarda o retorno da função `removeSong`, renderize a mensagem de `Carregando...`.<br />

  ![requisito-11](images/requisito11.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- A função `removeSong` é chamada quando algum checkbox que já esteja marcado é clicado;

- A mensagem `Carregando...` é exibida após clicar no checkbox e removida depois do retorno da API;

- O número de checkboxes marcados como `checked` diminui quando um checkbox marcado é clicado;
</details>

---

# Requisitos bônus

## 12. Crie a lista de músicas favoritas

<details><summary> Crie a lista dentro do componente <code>Favorites</code>, que é renderizado na rota <code>/favorites</code>.</summary>

- Ao entrar na página, utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Após receber o retorno da função `getFavoriteSongs`, utilize o componente `MusicCard` para renderizar a lista de músicas favoritas.

- Nesta página deve ser possível desfavoritar as músicas. Para isso utilize a função `removeSong` da `favoriteSongsAPI`.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Após remover a música, atualize a lista usando a função `getFavoriteSongs`. Lembre-se de exibir a mensagem `Carregando...` enquanto aguarda o retorno da API.

  ![requisito-12](images/requisito12.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- A requisição para `getFavoriteSongs` é feita para recuperar as músicas favoritas;

- É exibida a lista de músicas favoritas;

- A lista de músicas favoritas é atualizada ao remover uma música da lista.
</details>

---

## 13. Crie a exibição de perfil

<details><summary> Crie a exibição do perfil dentro do componente <code>Profile</code>, que é renderizado na rota <code>/profile</code></summary>

- Utilize a função `getUser` da `userAPI` para recuperar as informações da pessoa logada.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Após receber o retorno da `getUser`, exiba o nome, o email, a descrição e a imagem da pessoa logada.

- Para exibir a imagem, use a tag HTML `img` com o atributo `data-testid="profile-image"`;

- Crie um link que redirecione para a página de edição de perfil (rota `/profile/edit`). Este link deve ter o texto `Editar perfil`.

  ![requisito-13](images/requisito13.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- A API `getUser` é usada para recuperar as informações da pessoa logada;

- As informações da pessoa logada são exibidas na tela;

- Foi criado um link para a rota de edição de perfil com o texto `Editar perfil`;

- Ao clicar no link `Editar perfil`, a navegação acontece corretamente.
</details>

---

## 14. Crie o formulário de edição de perfil

Crie o formulário de edição de perfil dentro do componente <code>ProfileEdit</code>, que é renderizado na rota <code>/profile/edit</code>.

  * <details><summary> Utilize a função <code>getUser</code> da <code>userAPI</code> para recuperar as informações da pessoa logada: </summary>

    * Enquanto aguarda a resposta da API, exiba a mensagem "Carregando...".
  </details>

  * <details><summary> Após receber as informações da pessoa logada, renderize um formulário já preenchido com os seguintes campos:</summary>

    - Um campo para alterar o nome da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-name"`;

    - Um campo para alterar o email da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-email"`;

    - Um campo para alterar a descrição da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-description"`;

    - Um campo para alterar a foto da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-image"`;

    - Um botão para salvar as informações alteradas. Este botão precisa ter o atributo `data-testid="edit-button-save"`.
    </details>

  * <details><summary>Para poder habilitar o botão de enviar, todos os campos precisam estar preenchidos (não podem estar vazios): </summary>

    * O campo de email, além de não estar vazio também precisa verificar que o email tem um formato válido, ou seja, deve seguir o padrão `test@test.com`.
    
    * O botão de salvar as informações só deve ser habilitado quando todos os campos estiverem válidos, ou seja, todos campos preenchidos e o campo de email com um valor em formato válido.

    * Quando o botão estiver habiltado, utilize a função <code>updateUser</code> da <code>userAPI</code> para atualizar as informações da pessoa usuária. Essa API espera receber um objeto no seguinte formato:
    
      ```
        {
          name: '',
          email: '',
          image: '',
          description: '',
        }
      ```

    * Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.
  </details>

  * Ao finalizar o processo de edição, redirecione a pessoa logada para a página de exibição de perfil (rota `/profile`).
</details>

<details><summary><b> Ilustração:</b></summary>

  ![requisito-14](images/requisito14.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - É feita a requisição para `getUser` para recuperar as informações da pessoa logada; 

  - O formulário é renderizado já preenchido com as informações da pessoa logada;

  - É possível alterar os valores dos campos;

  - O botão `salvar` é habilitado somente se todos os campos estiverem válidos;

  - As informações são enviadas usando a API `updateUser`;

  - Após salvar as informações a pessoa é redirecionada para a página de exibição de perfil.
</details>

---
