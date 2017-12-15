jest.dontMock('../Title.react');

describe('Title component', function () {

  it('renders provided title text', function () {

    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');
    var Title = require('../Title.react');

    var title = TestUtils.renderIntoDocument(
	  <Title value="Testing..."/>
    );

    var actualTitleText = ReactDOM.findDOMNode(title).textContent;
	console.log(actualTitleText);
    expect(actualTitleText).toBe('Testing...');

    var defaultTitle = TestUtils.renderIntoDocument(
      <Title />
    );

    var actualDefaultTitleText = ReactDOM.findDOMNode(defaultTitle).textContent;

    expect(actualDefaultTitleText).toBe('');
  });
});  