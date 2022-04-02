import React from 'react';
import {
   Box,
   FormControl,
   Input,
   variant,
   WarningOutlineIcon,
} from 'native-base';

const NBInput = ({
   classInput,
   placeholder,
   classVariant,
   errorMessage,
   children,
}) => {
   return (
      <Box>
         <FormControl>
            <Input placeholder={placeholder} mt="4" variant={classVariant} />
            {/* <FormControl.ErrorMessage
               leftIcon={<WarningOutlineIcon size="xs" />}>
               {errorMessage}
            </FormControl.ErrorMessage> */}
         </FormControl>
      </Box>
   );
};

export default NBInput;
