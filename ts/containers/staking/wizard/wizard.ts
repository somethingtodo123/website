import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from 'ts/redux/reducer';

import { StakingWizard as StakingWizardComponent } from 'ts/pages/staking/wizard/wizard';
import { Dispatcher } from 'ts/redux/dispatcher';
import { Action, ProviderState } from 'ts/types';

interface StakingWizardProps {
}

interface ConnectedDispatch {
    onOpenConnectWalletDialog: () => void;
}

interface ConnectedState {
    providerState: ProviderState;
}

const mapStateToProps = (state: State, _ownProps: StakingWizardProps): ConnectedState => ({
    providerState: state.providerState,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): ConnectedDispatch => {
    const dispatcher = new Dispatcher(dispatch);

    return {
        onOpenConnectWalletDialog: (): void => {
            dispatcher.updateIsConnectWalletDialogOpen(true);
        },
    };
};

export const StakingWizard = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StakingWizardComponent);