import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
} from '@material-ui/core';
import { Trans, defineMessage } from '@lingui/macro';

const STATUS_OPEN = 1,
  STATUS_CLOSED = 2,
  STATUS_CANCELLED = 4,
  STATUS_COMPLETED = 8;

const statusMessages = {
  [STATUS_OPEN]: defineMessage({ message: 'Open' }),
  [STATUS_CLOSED]: defineMessage({ message: 'Closed' }),
  [STATUS_CANCELLED]: defineMessage({ message: 'Cancelled' }),
  [STATUS_COMPLETED]: defineMessage({ message: 'Completed' }),
};

export const BasedOnVariableExample: React.FC = () => {
  return (
    <Card>
      <CardHeader
        title={
          <Trans id="header.basedOnVariable">
            Picking a message based on a variable
          </Trans>
        }
      />
      <CardContent>
        <List>
          <ListItem>
            <Trans id={statusMessages[1].id} />
          </ListItem>
          <ListItem>
            <Trans id={statusMessages[2].id} />
          </ListItem>
          <ListItem>
            <Trans id={statusMessages[4].id} />
          </ListItem>
          <ListItem>
            <Trans id={statusMessages[8].id} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
