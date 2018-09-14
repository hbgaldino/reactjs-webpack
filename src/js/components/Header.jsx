import React from 'react';
import { Trans } from 'react-i18next';


class Header extends React.Component {
    render() {
        return (<div>
            <Trans i18nKey="header" />
        </div>);
    }
}

export default Header;