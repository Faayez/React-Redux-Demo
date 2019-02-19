import React, { Component } from 'react';
import { FormGroup, FormControl, } from 'react-bootstrap';

/**components... */
import TT from './tooltip';

class RenderField extends Component {

    render() {
        const { input, label, type, textarea, fieldName, rows, placeholder, meta: { asyncValidating, touched, error }, className, readOnly, icon, tooltip, onSelect, placesAutocomplete, maxLength } = this.props;

        return (
            <FormGroup validationState={!touched ? null : (error ? "error" : "success")}>
                <label>{fieldName}
                    <TT tooltip={tooltip || null}> {icon && <i className={icon}></i>} </TT>
                </label>
                <div className={asyncValidating ? 'async-validating' : null}>
                    <FormControl
                        {...input}
                        maxLength={maxLength ? maxLength : ''}
                        placeholder={placeholder ? placeholder : ''}
                        type={type ? type : "text"}
                        readOnly={readOnly}
                        componentClass={textarea ? "textarea" : "input"}
                        rows={rows ? rows : ''}
                    />
                </div>

            </FormGroup>
        );

    }

}

export default RenderField;

