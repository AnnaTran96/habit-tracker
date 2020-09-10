import ProgressBar from './ProgressBar'

describe('PrgressBar', () => {
    let component;

    beforeEach(() => {
       component = shallow(<ProgressBar/>);

    });

    test("it renders", () => {
        expect(component.find('wrapper')).toHaveLength(1);
    });

 
})