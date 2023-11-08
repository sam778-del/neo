
<template>
    <vs-row>
        <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
            <vs-card action-buttons>
                <div slot="header">
                  <h3>
                     Card Actions
                  </h3>
               </div>
            <table style="width:100%" class="border-collapse">
                <tr>
                    <th class="p-2 border border-solid border-grey-light">Action</th>
                    <th class="p-2 border border-solid border-grey-light text-center">Icon</th> 
                    <th class="p-2 border border-solid border-grey-light">Detail</th> 
                </tr>
                <tr>
                    <td class="p-2 border border-solid border-grey-light">Collapse</td>
                    <td class="border border-solid border-grey-light text-center"><feather-icon icon="ChevronDownIcon" svgClasses="h-5 w-5" /></td>
                    <td class="p-2 border border-solid border-grey-light">Collapse card content using collapse action.</td> 
                </tr>
                <tr>
                    <td class="p-2 border border-solid border-grey-light">Refresh Content</td>
                    <td class="border border-solid border-grey-light text-center"><feather-icon icon="RotateCwIcon" svgClasses="h-4 w-4" /></td>
                    <td class="p-2 border border-solid border-grey-light">Refresh your card content using refresh action.</td>
                </tr>
                <tr>
                    <td class="p-2 border border-solid border-grey-light">Remove Card</td>
                    <td class="border border-solid border-grey-light text-center"><feather-icon icon="XIcon" svgClasses="h-5 w-5" /></td>
                    <td class="p-2 border border-solid border-grey-light">Remove card from page using remove card action</td>
                </tr>
            </table>
            </vs-card>
        </vs-col>
       <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
            <vs-card collapse-action>
                <div slot="header">
        <h3>
          Collapsable Card
        </h3>
      </div>
                <p class="mb-3">You can create collapsible content card by setting <code>collapse-action</code> prop to <code>true</code>. By default it is set to false.</p>
                <p class="mb-3">You can also get this action if you set <code>action-buttons</code> prop to <code>true</code>.</p>
                <p>Click on <feather-icon icon="ChevronDownIcon" svgClasses="h-5 w-5" class="align-middle" /> icon to see card collapse in action.</p>
            </vs-card>
       </vs-col>
        <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
            <vs-card refresh-content-action>
                <div slot="header">
        <h3>
          Refresh Content
        </h3>
      </div>
                <p class="mb-3">You can add refresh content action by setting <code>refresh-content-action</code> prop to <code>true</code>. By default it is set to false.</p>
                <p class="mb-3">You can also get this action if you set <code>action-buttons</code> prop to <code>true</code>.</p>
                <p>Click on <feather-icon icon="RotateCwIcon" svgClasses="h-4 w-4" class="align-middle" /> icon to see refresh card content in action.</p>
            </vs-card>
        </vs-col>
       <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
            <vs-card remove-card-action>

                <div slot="header">
        <h3>
          Remove Card
        </h3>
      </div>
                <p class="mb-3">You can add remove card action by setting <code>remove-card-action</code> prop to <code>true</code>. By default it is set to false.</p>
                <p class="mb-3">You can also get this action if you set <code>action-buttons</code> prop to <code>true</code>.</p>
                <p>Click on <feather-icon icon="XIcon" svgClasses="h-4 w-4" class="align-middle" /> icon to see close card in action.</p>
            </vs-card>
       </vs-col>
       <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
            <vs-card action-buttons>
                <div slot="header">
        <h3>
          Action Buttons
        </h3>
      </div>
                <p class="mb-2">You can add all three action by setting <code>action-buttons</code> prop to <code>true</code>. By default it is set to false.</p>
                <p class="mb-1">Click on <feather-icon icon="ChevronDownIcon" svgClasses="h-5 w-5" class="align-middle" /> icon to see card collapse in action.</p>
                <p class="mb-1">Click on <feather-icon icon="RotateCwIcon" svgClasses="h-4 w-4" class="align-middle" /> icon to see refresh card content in action.</p>
                <p class="mb-1">Click on <feather-icon icon="XIcon" svgClasses="h-4 w-4" class="align-middle" /> icon to see close card in action.</p>
            </vs-card>
       </vs-col>
    </vs-row>
</template>