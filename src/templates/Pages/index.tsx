import LinkWrapper from 'components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import * as S from './styles';

export default function PagesTemplate() {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          cupiditate magni excepturi, eum corrupti consequuntur quisquam cumque
          reiciendis officia qui fuga labore dolorum suscipit velit nemo
          recusandae earum minus aut.
        </p>
      </S.Body>
    </S.Content>
  );
}
