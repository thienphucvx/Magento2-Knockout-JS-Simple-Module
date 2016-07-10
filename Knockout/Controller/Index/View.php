<?php

namespace Thienphucvx\Knockout\Controller\Index;
class View extends \Magento\Framework\App\Action\Action

{

    /**

     * @var \Magento\Framework\View\Result\PageFactory

     */

    protected $_resultPageFactory;

    /**

     * Index constructor.

     * @param \Magento\Framework\App\Action\Context $context

     * @param \Magento\Framework\View\Result\PageFactory $resultPageFactory

     */

    public function __construct(

        \Magento\Framework\App\Action\Context $context,

        \Magento\Framework\View\Result\PageFactory $resultPageFactory

    ){

        $this->_resultPageFactory = $resultPageFactory;

        parent::__construct($context);


    }
    /**

     * @return \Magento\Framework\View\Result\Page

     */

    public function execute()

    {

        return $this->_resultPageFactory->create();

    }



}