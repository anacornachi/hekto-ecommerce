import {
  Icon,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  TableColumnHeaderProps,
  Table,
} from '@chakra-ui/react';
import {ReactNode} from 'react';

type Props = {
  columns: {
    label: string;
    props?: TableColumnHeaderProps;
  }[];
  rows: ReactNode;
};

export default function ListTable({columns, rows}: Props) {
  return (
    <Table variant="primary">
      <Thead>
        <Tr>
          {columns.map((column, key) => (
            <Th
              key={key}
              {...column.props}
              cursor="pointer"
              position="relative"
              transition=".3s"
              _hover={{bg: 'gray.100'}}
            >
              <Text as="span">{column.label}</Text>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>{rows}</Tbody>
    </Table>
  );
}
