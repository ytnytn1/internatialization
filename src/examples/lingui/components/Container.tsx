import {
  Box,
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Trans } from '@lingui/macro';
import { BasedOnVariableExample } from './BasedOnVariableExample';
import { PluralExample } from './PluralExample';
import { LazyExample } from './LazyExample';
import { SelectsExample } from './SelectlExamples';

type ContainerProps = {
  language: string;
  onLanguageChange: (newLang: string) => void;
};

export const Container: React.FC<ContainerProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <Box>
      <Box mb={2}>
        <Card>
          <CardContent>
            <InputLabel>
              <Trans id="language">Language</Trans>
            </InputLabel>
            <Select
              value={language}
              onChange={(event) =>
                onLanguageChange(event.target.value as string)
              }
            >
              <MenuItem value="en">En</MenuItem>
              <MenuItem value="ru">Ру</MenuItem>
            </Select>
          </CardContent>
        </Card>
      </Box>
      <Box mb={2}>
        <PluralExample />
      </Box>
      <Box mb={2}>
        <LazyExample />
      </Box>
      <Box mb={2}>
        <BasedOnVariableExample />
      </Box>
      <Box>
        <SelectsExample />
      </Box>
    </Box>
  );
};
