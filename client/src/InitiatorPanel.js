import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import * as NETWORK from './networkconfig';
class InitiatorPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initiatorId: props.instanceId
        };
    }

    testRequest() {
        fetch("/0?command=test")
            .then(response => { return response; });
    }

    render() {
        return (
            <div>
                <Panel>
                    <Panel.Heading>Client{Number(this.state.initiatorId) + 1}</Panel.Heading>
                    <Button bsStyle="primary" onClick={this.testRequest.bind(this)}>Send TestReq</Button>
                </Panel>
            </div>
        );
    }
}

export default InitiatorPanel;
