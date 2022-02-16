import React, {useState} from 'react';
import ErrorMessage from "../components/error-message";

export const WithErrorApi = View => {
    return props => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [error, setError] = useState(false);

        return (
            <div>
                {error
                    ? <ErrorMessage />
                    : <View setError={setError} {...props} />
            }
            </div>
        )
    }
}