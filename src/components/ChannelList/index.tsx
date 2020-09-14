import React from 'react';

import ChannelButton from '../ChannelButton';
import ChannelVoice from '../ChannelVoice';

import { Container, Category, AddCategoryIcon, ExpandIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>

              
            
            <Category>
                <div> 
                <ExpandIcon />
                <span>notificações</span>  
                </div>  
                <AddCategoryIcon />           
            </Category>


            
            <ChannelButton channelName="avisos" />
            <ChannelButton channelName="avisos-server" />
            <ChannelButton channelName="votações" />
            <ChannelButton channelName="cineminha" />
            <ChannelButton channelName="cineminha-chat" />
            
            
            <Category>
            <div>
                <ExpandIcon />
                <span>Informações</span>
                </div>
                <AddCategoryIcon />
            </Category>
            
            <ChannelButton channelName="introdução" />
            <ChannelButton channelName="regras" />
            <ChannelButton channelName="cargos" />
            <ChannelButton channelName="cargos-de-niveis" />
            <ChannelButton channelName="menu-de-cargos" />
            <ChannelButton channelName="shop" />
            <ChannelButton channelName="mascotes" />

            <Category>
                <div>
                <ExpandIcon />
                <span>Ajuda</span>
                </div>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="suporte" />
            <ChannelButton channelName="perguntas-frequentes" />
            <ChannelButton channelName="chaves" />
            <ChannelButton channelName="lista-de-comandos" />
            <ChannelButton channelName="como-sugerir-personagem" />
            <ChannelButton channelName="como-sugerir-imagem-oficial" />

            <Category>
                <div>
                <ExpandIcon />
                <span>Eventos</span>
                </div>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="evento" />
            <ChannelButton channelName="guerras-civis" />
            <ChannelButton channelName="guerras-civis-2w" />

            <Category>
                <div>
                <ExpandIcon />
                <span>Comunidade</span>
                </div>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat" />
            <ChannelButton channelName="comandinhos" />
            <ChannelButton channelName="mídia" />
            <ChannelButton channelName="spoilers" />
            <ChannelButton channelName="artes" />

            <Category>
                <div>
                <ExpandIcon />
                <span>Canais de voz</span>
                </div>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="comandos-de-musica" />
            <ChannelVoice channelVoice="Weebs Voice 1" />
            <ChannelVoice channelVoice="Weebs Voice 2" />
            <ChannelVoice channelVoice="Weebs Voice 69" />

            <Category>
                <div>
                <ExpandIcon />
                <span>Fundo do Poço</span>
                </div>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="custom-imagens" />
            <ChannelButton channelName="custom-imagens-lv30" />
            <ChannelButton channelName="mural-da-vergonha" />


            <Category>
                <div>
                <ExpandIcon />
                <span>instancia principal</span>
                </div>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="avisos-1instancia" />
            <ChannelButton channelName="rolls-1c" />
            <ChannelButton channelName="rolls-2c" />
            <ChannelButton channelName="rolls-3c" />
            <ChannelButton channelName="rolls-666c" />
            <ChannelButton channelName="rolls-9c" />
            <ChannelButton channelName="rolls-10c" />
            <ChannelButton channelName="flood-sem-rolls" />
            <ChannelButton channelName="flood-sem-rolls-2" />
            <ChannelButton channelName="anuncio-de-trade" />

            <Category>
                <div>
                <ExpandIcon />
                <span>2° instancia</span>
                </div>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="informações-c" />
            <ChannelButton channelName="rolls-1c" />
            <ChannelButton channelName="rolls-2c" />
            <ChannelButton channelName="rolls-3c" />
            <ChannelButton channelName="rolls-4c" />
            <ChannelButton channelName="rolls-5c" />
            <ChannelButton channelName="rolls-69c" />
            <ChannelButton channelName="flood-sem-rolls-3" />

            <Category>
                <div>
                <ExpandIcon />
                <span>3° instancia evento</span>
                </div>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="informações-b" />
            <ChannelButton channelName="rolls-1b" />
            <ChannelButton channelName="rolls-2b" />
            <ChannelButton channelName="rolls-3b" />
            <ChannelButton channelName="rolls-4b" />
            <ChannelButton channelName="flood-sem-rolls-4b" />
            <ChannelButton channelName="flood-sem-rolls-5b" />

            <Category>
                <div>
                <ExpandIcon />
                <span>outros joguinhos</span>
                </div>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="pokemon" />
            <ChannelButton channelName="mudae-arena" />

        </Container>
    );    
};


export default ChannelList;