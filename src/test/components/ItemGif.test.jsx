const { render, screen } = require("@testing-library/react")
const { ItemGif } = require("../../components/ItemGif")

describe('pruebas en ItemGif', () => { 

    const title = 'Qiyana'

    const url = 'http://qiyana-sito.com/qiyana.jpg'

    test('Debe matchear el snapshot.', () => { 
        const { container } = render(<ItemGif title= { title } url ={ url }/>)
        expect ( container ).toMatchSnapshot()
     })

    test('Mostrar la imagen con el alt y url indicado. ', () => { 
        render(<ItemGif title= { title } url ={ url }/>)
        // screen.debug(); //  renders on cls the current sintaxis 

        // expect( screen.getByRole('img').src).toBe( url ) 
        // expect( screen.getByRole('img').alt).toBe( title ) 
        
        const { src, alt } = screen.getByRole('img')
        expect   ( src ). toBe ( url )
        expect   ( alt ). toBe ( title )

     })

 })