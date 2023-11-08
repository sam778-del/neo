
<template>
    <vs-card>
 <div slot="header">
        <h3>
         API
        </h3>
      </div>
        <vs-table stripe :data="api">

            <template slot="thead">
                <vs-th>Name</vs-th>
                <vs-th>Type</vs-th>
                <vs-th>Parametres</vs-th>
                <vs-th>Description</vs-th>
                <vs-th>Default</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td>
                        {{data[indextr].name}}
                    </vs-td>

                    <vs-td>
                        {{data[indextr].type}}
                    </vs-td>

                    <vs-td>
                        {{data[indextr].params}}
                    </vs-td>

                    <vs-td>
                        {{data[indextr].desc}}
                    </vs-td>

                    <vs-td>
                        {{data[indextr].default}}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>

    </vs-card>
</template>

<script>
export default {
    data() {
        return {
            api: [
                {
                    'name': 'vs-value',
                    'type': 'String',
                    'params': '',
                    'desc': 'Radius value.',
                    'default': '',
                },
                {
                    'name': 'color',
                    'type': 'String',
                    'params': 'primary,success,danger,warning,dark,RGB,HEX',
                    'desc': 'Radio color.',
                    'default': 'primary',
                },
                {
                    'name': 'disabled',
                    'type': 'Boolean',
                    'params': '',
                    'desc': 'Property to define if the radio is disabled.',
                    'default': 'false',
                },
            ]
        }
    },
}
</script>