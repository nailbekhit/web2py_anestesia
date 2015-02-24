# -*- coding: utf-8 -*-

#########################################################################
## This scaffolding model makes your app work on Google App Engine too
## File is released under public domain and you can use without limitations
#########################################################################

## if SSL/HTTPS is properly configured and you want all HTTP requests to
## be redirected to HTTPS, uncomment the line below:
# request.requires_https()

if not request.env.web2py_runtime_gae:
    ## if NOT running on Google App Engine use SQLite or other DB
    #db = DAL('sqlite://storage.sqlite',pool_size=1,check_reserved=['all'])
    db = DAL('postgres://postgres:devdtic2@teste.sistemas.unirio.br:5432/anestesia')
else:
    ## connect to Google BigTable (optional 'google:datastore://namespace')
    db = DAL('google:datastore+ndb')
    ## store sessions and tickets there
    session.connect(request, response, db=db)
    ## or store session in Memcache, Redis, etc.
    ## from gluon.contrib.memdb import MEMDB
    ## from google.appengine.api.memcache import Client
    ## session.connect(request, response, db = MEMDB(Client()))

## by default give a view/generic.extension to all actions from localhost
## none otherwise. a pattern can be 'controller/function.extension'
response.generic_patterns = ['*'] if request.is_local else []

## (optional) optimize handling of static files
# response.optimize_css = 'concat,minify,inline'
# response.optimize_js = 'concat,minify,inline'
## (optional) static assets folder versioning
# response.static_version = '0.0.0'
#########################################################################
## Here is sample code if you need for
## - email capabilities
## - authentication (registration, login, logout, ... )
## - authorization (role based authorization)
## - services (xml, csv, json, xmlrpc, jsonrpc, amf, rss)
## - old style crud actions
## (more options discussed in gluon/tools.py)
#########################################################################

from gluon.tools import Auth, Service, PluginManager

auth = Auth(db)
service = Service()
plugins = PluginManager()

## create all tables needed by auth if not custom tables
auth.define_tables(username=False, signature=False)

## configure email
mail = auth.settings.mailer
mail.settings.server = 'logging' if request.is_local else 'smtp.gmail.com:587'
mail.settings.sender = 'you@gmail.com'
mail.settings.login = 'username:password'

## configure auth policy
auth.settings.registration_requires_verification = False
auth.settings.registration_requires_approval = False
auth.settings.reset_password_requires_verification = True

## if you need to use OpenID, Facebook, MySpace, Twitter, Linkedin, etc.
## register with janrain.com, write your domain:api_key in private/janrain.key
from gluon.contrib.login_methods.janrain_account import use_janrain
use_janrain(auth, filename='private/janrain.key')

#########################################################################
## Define your tables below (or better in another model file) for example
##
## >>> db.define_table('mytable',Field('myfield','string'))
##
## Fields can be 'string','text','password','integer','double','boolean'
##       'date','time','datetime','blob','upload', 'reference TABLENAME'
## There is an implicit 'id integer autoincrement' field
## Consult manual for more options, validators, etc.
##
## More API examples for controllers:
##
## >>> db.mytable.insert(myfield='value')
## >>> rows=db(db.mytable.myfield=='value').select(db.mytable.ALL)
## >>> for row in rows: print row.id, row.myfield
#########################################################################

## after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)

db.define_table('paciente',
                    Field('nr_registro', 'integer'),
                    Field('matricula_hugg', 'integer'),
                    Field('nome', 'string'),
                    Field('data', 'date'),
                    Field('ficha_nr', 'integer'),
                    Field('enfermaria', 'string'),
                    Field('leito', 'string'),
                    Field('idade', 'integer'),
                    Field('asa'),
                    Field('clinica', 'string'),
                    Field('so'),
                    Field('dados_cadastrais_e', 'boolean'),
                    Field('dados_cadastrais_sexo', 'string'),
                    Field('altura', 'double'),
                    Field('peso', 'double'),
                    Field('temperatura', 'double'),
                    Field('pulso', 'integer'),
                    Field('respiracao', 'integer'),
                    Field('pa'),
                    Field('diagnostico', 'string'),
                    Field('dados_cirurgia_anterior', 'string'),
                    Field('tabagismo', 'boolean'),
                    Field('asma', 'boolean'),
                    Field('tosse', 'boolean'),
                    Field('dpoc', 'boolean'),
                    Field('bk_insuficiencia', 'boolean'),
                    Field('derrame_pleural', 'boolean'),
                    Field('circunferencia_toraxica', 'boolean'),
                    Field('has', 'boolean'),
                    Field('icc', 'boolean'),
                    Field('anglina', 'boolean'),
                    Field('iam', 'boolean'),
                    Field('valvulopalla', 'boolean'),
                    Field('marcapasso', 'boolean'),
                    Field('arritmias', 'boolean'),
                    Field('insuf_venosa', 'boolean'),
                    Field('diabetes', 'boolean'),
                    Field('hipertireoidismo', 'boolean'),
                    Field('endocrinopalias', 'boolean'),
                    Field('cirrose', 'boolean'),
                    Field('hepatite_a', 'boolean'),
                    Field('hepatite_b', 'boolean'),
                    Field('hepatite_c', 'boolean'),
                    Field('elilismo', 'boolean'),
                    Field('hiv', 'boolean'),
                    Field('infeccoes_oportunistas', 'boolean'),
                    Field('insuf_renal', 'boolean'),
                    Field('hemodialise_peritoneal', 'boolean'),
                    Field('disturbios_hemorragicos', 'boolean'),
                    Field('avc_previo', 'boolean'),
                    Field('doencas_psiquiatricas', 'boolean'),
                    Field('doencas_neuromuscular', 'boolean'),
                    Field('doencas_reumaticas', 'boolean'),
                    Field('alteracao_neurologica', 'boolean'),
                    Field('hemotransfusao_previa', 'boolean'),
                    Field('obs_gerais', 'text'),
                    Field('medicamentos_em_uso', 'string'),
                    Field('alergias', 'string'),
                    Field('cirurgias_previas', 'string'),
                    Field('mallampati', 'string'),
                    Field('abertura_boca', 'boolean'),
                    Field('dentes_falhos', 'boolean'),
                    Field('protese', 'boolean'),
                    Field('macroglossia', 'boolean'),
                    Field('distancia_esterno_mento', 'string'),
                    Field('pescoco_curto_longo', 'string'),
                    Field('mobilidade_cervical', 'string'),
                    Field('massa_cervical', 'boolean'),
                    Field('desvio_traqueia', 'boolean'),
                    Field('distancia_mento_hiloide', 'string'),
                    Field('circunferencia_cervical', 'string'),
                    Field('dificuldade_intubacao', 'boolean'),
                    Field('via_aerea_dificil', 'boolean'),
                    Field('historia_de_anafilaxia', 'boolean'),
                    Field('estomago_cheio', 'boolean'),
                    Field('corticoide', 'boolean'),
                    Field('endocardite_bacteriana', 'boolean'),
                    Field('hb', 'string'),
                    Field('ht', 'string'),
                    Field('hm', 'string'),
                    Field('plaquetas', 'string'),
                    Field('glicose', 'string'),
                    Field('u', 'string'),
                    Field('cr', 'string'),
                    Field('na', 'string'),
                    Field('k', 'string'),
                    Field('duracao_procedimento', 'string'),
                    Field('duracao_cirurgia', 'string'),
                    Field('cardioscopio', 'boolean'),
                    Field('ox_digital', 'boolean'),
                    Field('pni', 'boolean'),
                    Field('painv', 'boolean'),
                    Field('capnografo', 'boolean'),
                    Field('an_gases', 'boolean'),
                    Field('outros_monitorizacao', 'string'),
                    Field('tec_geral', 'boolean'),
                    Field('plexo', 'boolean'),
                    Field('bloqueio_neuroeixo', 'boolean'),
                    Field('combinada', 'boolean'),
                    Field('sedacao', 'boolean'),
                    Field('sub_mascara', 'boolean'),
                    Field('canula_naso', 'boolean'),
                    Field('canula_orofaringea', 'boolean'),
                    Field('mascara_laringea', 'boolean'),
                    Field('nr_mascara_laringea', 'string'),
                    Field('intubacao_oro_traqueal', 'boolean'),
                    Field("agente1", 'string', default='dtic'),
                    Field('agente2', 'string', default='null'),
                    Field('agente3', 'string', default='2'),
                    Field('agente4', 'string', default=None),
                    Field('agente5', 'string', default=None),
                    Field('agente6', 'string', default=None),
                    Field('agente7', 'string', default=None),
                    Field('agente8', 'string', default=None),
                    Field('agente9', 'string', default=None),
                    Field('agente10', 'string', default=None),
                    Field('diametro_tubo', 'string'),
                    Field('tipo_naso', 'boolean'),
                    Field('tipo_aramado', 'boolean'),
                    Field('dupla_luz', 'boolean'),
                    Field('balao', 'boolean'),
                    Field('laringoscopia', 'boolean'),
                    Field('broncofibroscopia', 'boolean'),
                    Field('estilete_luminoso', 'boolean'),
                    Field('videolaringoscopia', 'boolean'),
                    Field('cirurgia', 'string'),
                    Field('anestesia', 'string'),
                    Field('cirurgiao', 'string'),
                    )

db.paciente.nome.requires = IS_NOT_EMPTY(error_message='O Nome não pode estar sem preenchimento.')
db.paciente.matricula_hugg.requires = IS_NOT_EMPTY()
db.paciente.agente1.default = 'null'