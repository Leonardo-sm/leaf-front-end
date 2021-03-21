import {
  TabContainer,
  TabPaneMessages,
  TabPaneContacts,
} from '../styles/components/menu';

export function Menu() {
  return (
    <TabContainer defaultActiveKey="contacts">
      <TabPaneContacts key="contacts" tab="Contatos">
        <div className="box-container">
          <h2>Renan Nunes</h2>
        </div>
      </TabPaneContacts>

      <TabPaneMessages key="messages" tab="Mensagens">
        <div className="box-container">
          <h2>Renan Nunes</h2>
          <div>
            <p>Está tudo certo por...</p>

            <p>13/03/21</p>
          </div>
        </div>

        <div className="box-container">
          <h2>Leonardo Michelluti</h2>
          <div>
            <p>Eu vi algo estranh...</p>

            <p>02/03/21</p>
          </div>
        </div>
      </TabPaneMessages>
    </TabContainer>
  );
}
