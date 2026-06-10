import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../HomeContent.vue';

describe('Content', () => {
  it('renders properly', () => {
    const wrapper = mount(Content);
    expect(wrapper.text()).toContain('The use of calculateGroupValue and groupCellTemplate');
    expect(wrapper.text()).toContain('The use of a calculated hidden column and Summary');
  });
});
