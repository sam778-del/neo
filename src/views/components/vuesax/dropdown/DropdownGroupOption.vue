


<template>
    <vs-card>
        
          <div slot="header">
        <h3>
          Group Option
        </h3>
      </div>
        <p>If you need to group the options you can use the subcomponent <code>vs-dropdown-group</code> which as a required parameter is <code>vs-label</code> to define the group title</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="my-5">
            <p>The group can be hidden from the user and only open when it is sitting on the property with the <code>vs-collapse</code> property</p>
            <p>You can modify the icon with a property <code>vs-icon</code></p>
        </vs-alert>

        <dropdown-option-group></dropdown-option-group>
        <dropdown-group-collapse></dropdown-group-collapse>

        <template slot="codeContainer">
        </template>

    </vs-card>
</template>

<script>
import DropdownOptionGroup from "./dropdownGroupOption/DropdownOptionGroup.vue"
import DropdownGroupCollapse from "./dropdownGroupOption/DropdownGroupCollapse.vue"

export default{
    components: {
        DropdownOptionGroup,
        DropdownGroupCollapse,
    }
}
</script>