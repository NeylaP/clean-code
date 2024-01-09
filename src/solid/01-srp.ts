(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
        getProduct (id: number) {
            console.log('Producto: ', {id, name: 'OLED TV'});
        }

        saveProduct (product: Product) {
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {
        private masterEmail:string = 'neyla@gmail.com';
        sendEmail (emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor (productService: ProductService, mailer: Mailer){
            this.mailer         = mailer;
            this.productService = productService;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['maira@gmail.com'],'to-admins');
        }
     
    }
    
    class CartBloc {
        private itemsInCart: Object[] = [];

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailer         = new Mailer(); 

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc    = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();