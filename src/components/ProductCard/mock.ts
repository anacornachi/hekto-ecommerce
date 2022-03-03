import couch from '@public/images/couch.png';
import armchair from '@public/images/armchair.png';

export const products = [
  {
    id: 'Y523201', //codigo unico
    image: [], // imagens pra pagina de produto
    main_image: couch, // imagem unica
    alt: '', // texto alternativo pra imagem
    title: 'Cantilever chair',
    slug: 'cantilever-chair', // pra poder criar a rota do produto
    description: '',
    price: 42.0,
    promotion: 26.0, // preco promocional
    url: '', // que direciona pra pagina quando clicado
    color: [], // cores que vao aparecer nos 3 pontinho -- acho que vou deixar sempre igual
    rate: 4, // avaliacao de 0 a 5
    stock: 6, // estoque disponivel no banco
  },
  {
    id: 'Y864109',
    image: [],
    main_image: armchair,
    alt: '',
    title: 'Confort Handy Craft',
    slug: 'confort-handy-craft',
    description: '',
    price: 65.0,
    promotion: '',
    url: '',
    color: [],
    rate: 5,
    stock: 2,
  },
  {
    id: 'Y987678',
    image: [],
    main_image: '',
    alt: '',
    title: 'Mini LCW Chair',
    slug: 'mini-lcw-chair',
    description: '',
    price: 56.0,
    promotion: 50.0,
    url: '',
    color: [],
    rate: 5,
    stock: 2,
  },
  {
    id: 'A431562',
    image: [],
    main_image: '',
    alt: '',
    title: 'Mini LCW Chair',
    slug: 'mini-lcw-chair',
    description: '',
    price: 56.0,
    promotion: 43.0,
    url: '',
    color: [],
    rate: 5,
    stock: 2,
  },
];
