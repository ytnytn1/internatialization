import { Button, Card, CardContent, CardHeader } from '@material-ui/core';
import { useState } from 'react';
import { t, Plural } from '@lingui/macro';

export const PluralExample: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <Card>
      <CardHeader
        title={t({ id: 'Plural example', message: 'Plural example' })}
      />
      <CardContent>
        <Plural
          value={count}
          _0="You clicked # times"
          one="You clicked # time"
          other="You clicked # times"
        />
      </CardContent>
      <CardContent>
        <Button onClick={() => setCount((prev) => prev + 1)}>
          {t({ id: 'click', message: 'Click me' })}
        </Button>
      </CardContent>
    </Card>
  );
};
