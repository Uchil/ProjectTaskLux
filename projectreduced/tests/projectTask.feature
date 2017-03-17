Feature: projectTask Widget

	Scenario: projectTask View
		Given I have loaded mock "projectTask/mocks/projectTask_state_one.json"
		Then there will be an element for "container"
#		And the widget title will be "Hello projectTask !!!"