import Results from './Results'

describe('Results', () => {
    let component;

    beforeEach(() => {
       component = shallow(<Results/>);

    });

    test("it renders", () => {
        expect(component.find('.all-habits')).toHaveLength(1);
    });

    
})