import * as React from 'react';
import { Component } from 'react';
import './styles.css';


class Suppliers extends Component<{}, void> {
    render(): React.Element<'div'> {
        return(
            <div className="supplier-container">
                <p>Soy la lista de proveedores en construccion</p>
            </div>
        )
    }
}
export default Suppliers;