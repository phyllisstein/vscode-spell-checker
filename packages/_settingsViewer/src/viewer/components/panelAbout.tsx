import * as React from 'react';
import {observer} from 'mobx-react';
import { AppState } from '../AppState';
import {VsCodeWebviewApi} from '../../api/vscode/VsCodeWebviewApi';
import { Button } from '@material/react-button';
import * as spellCheckIcon from '../images/SpellCheck.xs.png';

const vsCodeApi = new VsCodeWebviewApi();

@observer
export class PanelAbout extends React.Component<{appState: AppState}, {}> {
    render() {
        const appState = this.props.appState;
        return (
            <div>
                <h1><img src={spellCheckIcon} /> Code Spell Checker</h1>
                <Button
                    className="button-alternate"
                    onClick={this.onReset}
                >
                    Seconds passed: {appState.timer}
                </Button>
                <h2>{appState.counter}</h2>
                {/* <DevTools /> */}
            </div>
        );
     }

     onReset = () => {
        this.props.appState.resetTimer();
        vsCodeApi.postMessage({ command: 'RequestConfigurationMessage'});
    }
}