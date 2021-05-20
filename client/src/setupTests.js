// import enzyme and sets up adapter to run tests
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });








//REFERENCES
//https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/

//  - it or test, You would pass a function to this method, and the test runner would execute that function as a block of tests.
//  - describe, This optional method is for grouping any number of it or test statements.
//  - expect, This is the condition that the test needs to pass. It compares the received parameter to the matcher. It also gives you access to a number of matchers that let you validate different things. You can read more about it in the documentation.
//  - mount, This method renders the full DOM, including the child components of the parent component, in which we are running the tests.
//  - shallow, This renders only the individual components that we are testing. It does not render child components. This enables us to test components in isolation.