import App from '../App'


describe('App', () => {

    let component

    beforeEach(() => {
       component = shallow(<App/>);
    });

    test("it renders", () => {
       expect(component.find('#app')).toHaveLength(1)
    });

    // test("it has 5 routes", () => {
    //     expect(component.find(<Route/>)).toHaveLength(5)
    // });
})