import { FormControl, FormLabel, Input, Button, Box, FormErrorMessage } from '@chakra-ui/react';
import { setUserRepo } from '../store/services/query';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const FormIssue = () => {
  const [query, setQuery] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const preparedValue = value.trim();

    setQuery(preparedValue);
  };

  const onHanleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDisabled(true);
    setIsError(false);

    const shouldStartWith = /^https:\/\/github\.com\/[^\/]+\/[^\/]+/;

    if (!shouldStartWith.test(query)) {
      setIsError(true);
      setIsDisabled(false);
      return;
    }

    const preparedValue = new URL(query).pathname.slice(1);

    dispatch(setUserRepo(preparedValue));
    setIsDisabled(false);
    setQuery('');
  };

  return (
    <FormControl
      isDisabled={isDisabled}
      as="form"
      w="100%"
      onSubmit={onHanleSubmit}
      justifyContent="center"
      mb="8"
      isRequired={isError}
      isInvalid={isError}
    >
      <Box w="100%">
        <FormLabel visibility={'hidden'} id="form-issue">
          Enter your repo
        </FormLabel>
        <Box display="flex" gap="4">
          <Input
            w="100%"
            aria-label="form-issue"
            placeholder="Enter your repo"
            type="text"
            bgColor="white"
            value={query}
            onChange={onHandleChange}
          />
          <Button isDisabled={query.length === 0} type="submit" color="black" alignSelf="center">
            Load
          </Button>
        </Box>
      </Box>
      <FormErrorMessage color={'black'} fontSize="large">
        Url should look like 'https://github.com/your-acount/your-repo'
      </FormErrorMessage>
    </FormControl>
  );
};
