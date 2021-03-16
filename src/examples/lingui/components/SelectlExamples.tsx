import {
  Card,
  CardContent,
  CardHeader,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Trans, defineMessage, t } from '@lingui/macro';
import { useState } from 'react';
import { MessageDescriptor } from '@lingui/core';

type Gender = 'male' | 'female' | 'other';

const genders: Record<Gender, MessageDescriptor> = {
  male: defineMessage({ message: 'he', id: 'male' }),
  female: defineMessage({ message: 'she', id: 'female' }),
  other: defineMessage({ message: 'they', id: 'other' }),
};

const genderLabel: Record<Gender, MessageDescriptor> = {
  male: defineMessage({ message: 'this is', id: 'is' }),
  female: defineMessage({ message: 'this is', id: 'is' }),
  other: defineMessage({ message: 'they are', id: 'are' }),
};

export const SelectsExample: React.FC = () => {
  const [gender, setGender] = useState<Gender | undefined>();

  return (
    <Card>
      <CardHeader title={<Trans id="header.selects">Select examples</Trans>} />
      {gender != null && (
        <CardContent>
          {`${t({ id: genderLabel[gender].id })} ${t({
            id: genders[gender].id,
          })}`}
        </CardContent>
      )}
      <CardContent>
        <InputLabel>
          <Trans id="gender">Gender</Trans>
        </InputLabel>
        <Select
          value={gender ?? ''}
          onChange={(event) => setGender(event.target.value as Gender)}
        >
          <MenuItem value="male">
            <Trans id={genders['male'].id} />
          </MenuItem>
          <MenuItem value="female">
            <Trans id={genders['female'].id} />
          </MenuItem>
          <MenuItem value="other">
            <Trans id={genders['other'].id} />
          </MenuItem>
        </Select>
      </CardContent>
    </Card>
  );
};
