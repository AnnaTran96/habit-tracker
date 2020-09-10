import AddNew from './AddNew.js';

describe('AddNew', () => {
    let component
    beforeEach(() => {
        component = shallow(<AddNew />);
    })

    test('testing if h1 says Add New', () =>{
        expect(component.find('h1').text()).toEqual('Add New')
    })

    test('testing if h3 says Habitory', () =>{
        expect(component.find('h3').text()).toEqual('Habitory')
    })

})