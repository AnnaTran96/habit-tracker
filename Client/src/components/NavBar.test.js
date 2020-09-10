import NavBar from './NavBar'

describe('NavBar', () => {
    let component;

    beforeEach(() => {
       component = shallow(<NavBar/>);

    });

    test("it renders", () => {
        expect(component.find('.habits-nav')).toHaveLength(1);
    });

    test('it has 3 NavLinks'), () => {
        expect(component.find(<NavLink/>)).toHaveLength(3)
    }

})