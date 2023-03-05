productsArray = [{
    title: 'Revesderecho Linea Premium Wool ',
    description: 'Equilibrio perfecto entre nobleza y calidez. No te arrepentirás!  100% Lana ahora es Wool, si decides comprarlo ahora, lo recibirás como Wool.  Al finalizar tu proyecto, te sugerimos bloquearlo para que la prenda quede pareja y se luzca mejor.  Lavado: a mano sin estrujar, agua fría y secado idealmente sobre una toalla en forma horizontal.',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_827193-MLC46449211048_062021-F.webp',
    price:'$4.990',
    code: '0001',
    stock: '100',
}
]

class ProductManager {

    constructor () {
        this.product = productsArray
    }

    addProduct = (newProduct) => {
        const product = this.product.find( prod => prod.code === newProduct.code);
        if (product){
            return 'Ya existe el producto, con ese codigo'
        }
        if(this.product.length === 0){
            this.product.push({id: 1, ...newProduct});

        }else {
            this.product.push ({id : this.product[this.product.length-1].id +1, ...newProduct})
        }

    }

    getProducts() {
        return this.product
    }

    getProductById (id) {
       const object = this.product.find( elemento => elemento.id === id );
            return object ? object : null;
        }

}

const products = new ProductManager()

products.addProduct({
    title: 'Revesderecho Linea Kids Soft',
    description: 'Aprovecha la suavidad y colores para entregársela a tus niños!',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_846061-MLC46943848962_082021-F.webp',
    price: '$2.990',
    code: '0002',
    stock: 100
})

console.log('todos',products.getProducts())
console.log('por id: ',products.getProductById())
