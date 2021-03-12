import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
} from '@material-ui/core';
import { Trans, defineMessage } from '@lingui/macro';

const favoriteColors = [
  defineMessage({ message: 'Red' }),
  defineMessage({ message: 'Orange' }),
  defineMessage({ message: 'Yellow' }),
  defineMessage({ message: 'Green' }),
];

export const LazyExample: React.FC = () => {
  return (
    <Card>
      <CardHeader title={<Trans>Lazy translation example</Trans>} />
      <CardContent>
        <List>
          {favoriteColors.map((color, index) => (
            <ListItem key={index}>
              <Trans id={color.id} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
